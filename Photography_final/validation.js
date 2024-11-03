
window.onload = function () {

    var fullname = document.getElementById("name")

    fullname.onblur = function () {

        if (
            (/\d/.test(fullname.value)) ||
            (/[^a-zA-Z0-9-]/gm.test(fullname.value))
        ) {
            document.getElementById("errorMessage").innerHTML = "Digits are Special Characters are not allowed"
            return false



        } else {
            document.getElementById("errorMessage").innerHTML = ""
            return true;


        }

    }




    //Email Validation: Verifies if the email  contains all the corect characters and @

    var email = document.getElementById("email")


    email.onblur = function () {

        if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email.value)) {
            document.getElementById("errorMessage1").innerHTML = "E-mail adress not valid"
            return false
        } else {
            document.getElementById("errorMessage1").innerHTML = ""
            return true
        }

    };



    // Website validation:Verify if the URL of the enetered website is valid one or not 

    //(http|https)://) makes sure the string starts with either http or https followed by ://.
    //[-a-zA-Z0-9@:%._\\+~#?&//=] indicates alphanumeric characters and/or special characters. The first instance of this set represents the set of characters to allow in the sub-domain and root domain parts. While the second instance of this set represents the set of characters to allow in the query string or subdirectory part.
    //{2,256} represents 2 to 256 (both inclusive) times occurrence indicator. This indicates that the combined length of the subdomain and domain must be between two and 256.
    //\. represents the dot character.
    //[a-z]{2,6} means any lowercase letters from a to z with a length between two and six. This represents the set of characters to allow in the top-level domain part.
    //\b represents the boundary of a word, i.e. the start of a word or the end of one.
    //* is a repetition operator which indicates zero or more copies of the query string, parameters, or subdirectories.
    //^ and $ indicate the start and end of the string respectively.

    //The above regex satisfies the following types of URLs:
    /*
       https://www.something.com/
       http://www.something.com/
       https://www.something.edu.co.in
       http://www.url-with-path.com/path
       https://www.url-with-querystring.com/?url=has-querystring
       http://url-without-www-subdomain.com/
       https://mail.google.com
    
    */


    var website = document.getElementById("website")


    website.onblur = function () {

        if (!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(website.value)) {
            document.getElementById("errorMessage2").innerHTML = "The entered URL of the website is not valid"
            return false
        } else {
            document.getElementById("errorMessage2").innerHTML = ""
            return true
        }

    };



    document.getElementById("submit").onclick = check

    function check() {
    
      
      if (
          ((document.getElementById("name").value == "")) ||
         
          ((document.getElementById("email").value == "")) || 
          ((document.getElementById("website").value == "")) ||
          ((document.getElementById("suggest").checked == false)) && 
          ((document.getElementById("submit1").checked == false)) &&
          ((document.getElementById("comment").checked == false)) &&
          ((document.getElementById("friends").checked == false)) 
        ) {
    
    
        document.getElementById("errorMessage3").innerHTML = "All fields are reguired, at least one option should be selected!!! " 
    
    
        return false;
      } else {
    
        document.getElementById("errorMessage3").innerHTML = ""
    
        return true
      }
    
    }


















}






















