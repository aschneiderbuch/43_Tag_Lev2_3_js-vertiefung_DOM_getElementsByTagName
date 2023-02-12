console.log("test")


// getElementsByTagName


/* 
Denk an den index[]
 */

const btn = document.querySelectorAll("a");
console.log(btn);
console.log(typeof btn) // object
console.log(Array.isArray(btn)) // false 
console.log(btn[0])
console.log(typeof btn[0]) // object
console.log(Array.isArray(btn[0])) // false

// Button click 
btn[3].addEventListener("click", farbWechsel);  // das 0,1,2,3   also das 4te li aus dem html ist Change me

// function 
function farbWechsel() {
    console.log("in function farbWechsel");

    if (btn[3].style) {     // unnötig
        console.log("in if");
        console.log(btn[3])
        console.log(typeof btn[3]) // object
        console.log(Array.isArray(btn[3])) // false  */
        btn[3].style.backgroundColor = "#396462"
        btn[0].style.backgroundColor = "#f6c89f";
        btn[1].style.backgroundColor = "#ffe7d1";
        btn[2].style.backgroundColor = "#4b8e8d";

        for (let i = 0; i < btn.length; i++ ) {
            console.log("in for let i für color")
            if (btn[i].style) {   // unnötig
                console.log("in if von for für color")
                btn[i].style.color = "#666";
            }
        }

    }
}


// Button Farbe ändern
// Button Hintergrundfarbe ändern

// Farben: #f6c89f, #ffe7d1, #4b8e8d, , #666, #333
