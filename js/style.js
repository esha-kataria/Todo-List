let globallist = [];
            let val1= localStorage.getItem("list");
            let val2= JSON.parse(val1);

            for(i=0; i<val2.length; i++)
            {
              globallist.push(val2[i])

            }

            
            for(i=0; i<globallist.length; i++)
            { 
                document.getElementById("list").innerHTML += `<li><input type='checkbox' id='checkbox1' ${globallist[i].checkval ? 'checked' : '' }  onchange='termsChecked(${i})'><span class='colorcls ${globallist[i].checkval ? 'selectedgrey' : 'unselectedgrey' }'>${globallist[i].name}</span><button class='delete-button' onclick='deletebtn(${globallist[i].id})' id= 'delete'>x</button></li>`;
            }

            

        function add(){
            let inputval = document.getElementById("input1").value;

            let objdata = {
                    'id': Date.now(),
                    'name': inputval,
                    'checkval': false
            };  
            let crtindex = globallist.push(objdata);

            localStorage.setItem("list",JSON.stringify(globallist)); 

                document.getElementById("list").innerHTML += `<li><input type='checkbox' id='checkbox1' onchange='termsChecked(${crtindex})'><span class='colorcls'>${objdata.name}</span><button class='delete-button' onclick='deletebtn(${globallist[i].id})' id= 'delete'>x</button></li>`;
        }

        
        function termsChecked(index) {

            console.log(index);
            if(globallist[index].checkval)
            {
                globallist[index].checkval = false;
                document.getElementsByClassName("colorcls")[index].style.color="black";
            }else{
                globallist[index].checkval = true;
                document.getElementsByClassName("colorcls")[index].style.color="grey";
            }
            
            localStorage.setItem("list",JSON.stringify(globallist));

        }

        function deletebtn(id) {

            globallist = globallist.filter((valobj)=>{
                return valobj.id != id;
            });
            // globallist = pendingdata;
            localStorage.setItem("list",JSON.stringify(globallist));
            document.getElementById("list").innerHTML = "";
            for(i=0; i<globallist.length; i++)
            { 
                document.getElementById("list").innerHTML += `<li><input type='checkbox' id='checkbox1' ${globallist[i].checkval ? 'checked' : '' }  onchange='termsChecked(${i})'><span class='colorcls ${globallist[i].checkval ? 'selectedgrey' : 'unselectedgrey' }'>${globallist[i].name}</span><button class='delete-button' onclick='deletebtn(${globallist[i].id})' id= 'delete'>x</button></li>`;
            }
            
        }