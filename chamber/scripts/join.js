

const join_form = document.querySelector('.the-form');

if(join_form) {
    join_form.addEventListener('submit', function(e) {
        submitForm(e, this);
    });
}

async function submitForm(e, form) {
    e.preventDefault();

    const btnSubmit = document.querySelector('.button');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);

    const jsonFormData = buildJsonFormData(form);

    const headers = buildHeaders();

    const response = await fetchService.performPostHttpRequest('https://jsonplaceholder.typicode.com/posts', headers, jsonFormData);
    console.log(response);

    if(response)
        window.location=`/success.html?FirstName=${response.FirstName}&LastName=${response.LastName}&Position=${response.Position}&Email=${response.Email}&Phone=${response.Phone}&Organization=${response.Organization}&MembershipLevel=${response.MembershipLevel}&Description=${response.Description}&Timestamp=${response.Timestamp}&id=${response.id}`
    else
        console.log('An error occured')
        alert('An error occured')
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}

// Add headers?

async function performPostHttpRequest(fetchLink, headers, body) {
    if(!fetchLink || !headers || !body) {
        throw new Error('One or more POST request parameters was not passed.');
    }
    try {
        const rawResponse = await fetch(fetchLink, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });
        const content = await rawResponse.json();
        return content;
    } catch (error) {
        console.error(`Error at fetch POST: ${error}`);
        throw error;
    }
}