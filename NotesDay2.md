 <script>
        
        // do a sanity test, if it appears with the dev tools in brower, it worked !
        console.log("sanity test passed!!!");

        // Data Types
        // string
        let myString = "my string";

        // Number
        let myNumber = 10;
        let myNumber2 = "3.14"; 

        // Boolean is either true or false
        let isItTrue = true;
        let isDefFalse = false;

        // Let's do some checks
        let age = 24;
        let age2 = 30;
        let value = 1990;

        //Expressions
        let result = ((myNumber === myNumber2 || age === age2) || value === 1990);

        let result2 = (myNumber === myNumber2 || age === age2);

        console.log(" The result of the comparison is: " + result);
        
        //Do some conditional logic
        if (value === 1990)
        {
            console.log("That is indeed a great album by Awolnation!");
        }

        else if (age === 36)
        {
            console.log("Ok then ... you are 36");
            if (value > 1000)
            {
                console.log(OMG);
            }
        }
        else 
        {
            console.log("Nothing is true");
        } 

        // Classics of loops
        for (let index = 0; (index < 10); index + 1) 
            {
            console.log("Still looping... ");           
            }
              {
            console.log("out of loop");
              }
        // Simple while loop
        let iamNotdone = true;
        while (iamNotdone)
        {
            let response = prompt("R you done").toLowerCase(); // user should enter 'y' or 'n'
            if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes')
            {
                iamNotdone = false;
            } 

        }



    </script> 