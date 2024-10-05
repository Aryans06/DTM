document.getElementById("learnmore").addEventListener("click", function() {
    alert("Explore our range of advanced EV batteries for a sustainable future!Find out how our advanced battery technology is powering the next generation of electric vehicles with superior performance, safety, and sustainability."
    );
 });

 document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("yes").addEventListener("click", function(){
     alert("Thank you for reaching out to us. We will get back to you shortly.")
    })
    

// Reset the form
this.reset();
 
 });


 