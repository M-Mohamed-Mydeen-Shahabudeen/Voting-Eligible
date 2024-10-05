function checkEligibility()
{
    const input=document.getElementById('check').value;
    const result=document.getElementById('result');

    if(input=="")
    {
        result.textContent="Please enter Age"
        result.style.color="yellow"
    }
    else if(input>=18)
    {
        result.textContent="Your eligible for voting";
        result.style.color="Green"
    }
    else
    {
        result.textContent="You are not eligible"
        result.style.color="Red"
    }

}
