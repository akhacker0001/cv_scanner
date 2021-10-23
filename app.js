const data = [

    {
        name: 'ankit',
        age: 19,
        location: 'ludhiana, punjab',
        language: 'javascript',
        framework: 'django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'

    },
    {
        name: 'rahul',
        age: 20,
        location: 'ludhiana, punjab',
        language: 'python',
        framework: 'django',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'

    },
    {
        name: 'rohit',
        age: 17,
        location: 'sultanpur, uttarpradesh',
        language: 'c',
        framework: 'c framework',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'

    },
    {
        name: 'punnit',
        age: 22,
        location: 'chandigrah, punjab',
        language: 'c++',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/men/63.jpg'

    },
    {
        name: 'riya',
        age: 19,
        location: 'ludhiana, punjab',
        language: 'java',
        framework: 'django',
        image: 'https://randomuser.me/api/portraits/women/73.jpg'

    },
    {
        name: 'rakhi',
        age: 25,
        location: 'moscow, usa',
        language: 'javascript',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/women/71.jpg'

    },




]


function iterater(values) {
    let nextIndex = 0;
    return {
        next: () => {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let iteraterData = iterater(data)


const button = document.getElementById('next');

const cvDataContainer = document.getElementById('cvDataContainer');
button.addEventListener('click', showCv);

const candidate = iterater(data)

function showCv() {
    cvDataContainer.innerHTML = ''
    let currentCandidate = candidate.next().value;

    if (currentCandidate != undefined) {
        let html = `
                <div class="images">
                    <img src="${currentCandidate.image}" alt="" srcset="">
                </div>
                <ul class="list-group my-2 ">
                    <li class="list-group-item">NAME: ${currentCandidate.name}</li>
                    <li class="list-group-item">AGE: ${currentCandidate.age}</li>
                    <li class="list-group-item">LOCATION: ${currentCandidate.location}</li>
                    <li class="list-group-item">LANGUAGE: ${currentCandidate.language}</li>
                    <li class="list-group-item">FRAMEWORK: ${currentCandidate.framework}</li>
                  </ul>

`
        cvDataContainer.insertAdjacentHTML('afterbegin', html)
    } else {
        alert('you have visit full cv')
        window.location.reload()
        console.log('yes')

    }
}

showCv()
