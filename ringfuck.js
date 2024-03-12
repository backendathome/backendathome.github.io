function prepRunCode() {
    var code = document.getElementById("cf-code").value
    callMain([`${code.length}`, code]);
}

window.addEventListener("load", (event) => {
    document.getElementById("cf-code").value = helloWorldTestString;
});

const helloWorldTestString = `{this is a comment}3 4
 5
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
>>>>
---
>
++++
<<<<<
.
++++
>>>>
++++++
>{




    this is 
    another 
    comment
}
------------------------------------------------
<<<<<
.
+++++++++++
>>>>
-----------
>
+++++++++++++++++++++++++++++++++++++++
<<<<<
.
-----------
>>>>>
--------------------------------------
<<<<<
.
--------------------------------------------
>>>>
++++++++
>
+++++++++++++++++++++
<<<<<
.{this is a comment that never ends

















never`
