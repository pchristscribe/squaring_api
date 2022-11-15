const url_base = `http://127.0.0.1:8000/square/`;


function get_hello() {
  set_result(url_base.home, 'text-result')
}


function get_square() {
    // Adapted from: https://thewebdev.info/2022/04/18/how-to-refresh-part-of-page-with-javascript/
    
    // Disable the submit button until the process ends
    const submit_button = document.getElementById('submit');
    submit_button.disabled = true;

    // Pull number from form on submit
    const number = document.getElementById('number').value;
    const url = `${url_base}${number}`;

    set_result(url, 'result')

    // Reenable the submit button
    submit_button.disabled = false;
  }


async function set_result(url, result_id) {
    const result = document.getElementById(result_id);
    result.innerHTML = "Loading...";
  
    // Actually make the API call and update the HTML with that info
    result.innerHTML = await (await fetch(url)).text();
}