var movies=[];
window.onload = function(){
    document.getElementById("mov").onclick = function () {
        let a = document.getElementById('inp').value;
        if (a=="") {
            alert("Empty field!");
            return false;
        }
        else
        {
            if (confirm("Are you sure you want to add this?"))
            {
                movies=[];
                movies.push(a);
                let list = document.getElementById("myList");
                for (i = 0; i < movies.length; ++i) {
                    let li = document.createElement('li');
                    li.innerText = movies[i];
                    list.appendChild(li);
                }
                document.getElementById("num").innerHTML++;
            }   
        }
        
    };
    document.getElementById("rem").onclick = function () {
        let a = document.getElementById('del').value;
        if (a=="") {
            alert("Empty field!");
            return false;
        }
        else
        {
            if (confirm("Are you sure you want to delete this?"))
            {
                const list = document.getElementById('myList');
                var boo = 0;
                const items = list.getElementsByTagName('li');
                for (let i = 0; i < items.length; i++) {
                    if (items[i].textContent === a) {
                    boo=1;
                    list.removeChild(items[i]);
                    break;
                    }
                }
                if (boo) document.getElementById("num").innerHTML--;
                else alert("Not found!")
            }   
        }
        
    };
    document.getElementById("clear").onclick = function () {
        let listItems = document.getElementsByTagName('li');
        while (listItems[0]) {
            console.log(listItems[0]);
            listItems[0].parentNode.removeChild(listItems[0]);
        }
        document.getElementById("num").innerHTML=0;
    };
};