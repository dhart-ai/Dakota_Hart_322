// Create first table header
document.write("<table>");
document.write("<tr>");
document.write("<th>Number 1</th>");
document.write("<th>Operator</th>");
document.write("<th>Number 2</th>");
document.write("<th>Result</th>");
document.write("</tr>");

// Variables for summary
let total = 0;
let count = 0;
let min = Infinity;
let max = -Infinity;

while (true)
{
    let x = prompt("Enter first number (Cancel to stop):");

    if (x === null)
        break;

    let operator = prompt("Enter operator (+, -, *, /, %):");

    if (operator === null)
        break;

    let y = prompt("Enter second number:");

    if (y === null)
        break;

    let result;

    // Validate numbers
    if (isNaN(x) || isNaN(y))
    {
        result = "Error: Invalid number";
    }
    else
    {
        x = Number(x);
        y = Number(y);

        // Perform calculation
        if (operator === "+")
            result = x + y;

        else if (operator === "-")
            result = x - y;

        else if (operator === "*")
            result = x * y;

        else if (operator === "/")
            result = x / y;

        else if (operator === "%")
            result = x % y;

        else
            result = "Error: Invalid operator";
    }

    // Update summary only if result is a valid number
    if (!isNaN(result))
    {
        total += result;
        count++;

        if (result < min)
            min = result;

        if (result > max)
            max = result;
    }

    // Write row to table
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");
}

// Close first table
document.write("</table>");

// Only show summary if at least one valid result exists
if (count > 0)
{
    let avg = total / count;

    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>Minimum</th>");
    document.write("<th>Maximum</th>");
    document.write("<th>Average</th>");
    document.write("<th>Total</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + avg + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    document.write("</table>");
}
else
{
    document.write("<p>No valid calculations were entered.</p>");
}
