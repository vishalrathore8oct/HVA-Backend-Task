let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputWord = document.querySelector("input").value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let outputDiv = document.querySelector("#output");
            outputDiv.innerHTML = "";

            if (data.title === "No Definitions Found") {
                outputDiv.innerHTML = `<h1>There are no definitions for this word.</h1>`;
            } else {
                
                // For Word
                for (const element of data) {
                    if (element.word) {
                        outputDiv.innerHTML += `<h1>Word: ${element.word}</h1>`;
                        break;
                    }
                }

                // For Phonetics
                let phoneticsValue = "No phonetics found";
                for (const elementOut of data) {
                    for (const elementIn of elementOut.phonetics) {
                        if (elementIn.text) {
                            phoneticsValue = elementIn.text;
                            break;
                        }
                    }
                }
                outputDiv.innerHTML += `<p><strong>Phonetics:</strong> ${phoneticsValue}</p>`;

                // Initialize values
                let meaningsValuePartOfSpeech = "No part of speech found";
                let meaningsValueDefinition = "No definition found";
                let meaningsValueExample = "No example found";
                let meaningsSynonymsValue = "No synonyms found";
                let meaningsAntonymsValue = "No antonyms found";

                // Meanings
                for (const elementOut of data) {
                    for (const elementIn of elementOut.meanings) {
                        // Part of Speech
                        if (elementIn.partOfSpeech) {
                            meaningsValuePartOfSpeech = elementIn.partOfSpeech;
                            break;
                        }
                    }

                    // Definitions
                    for (const elementIn of elementOut.meanings) {
                        if (elementIn.definitions) {
                            for (const elementIn2 of elementIn.definitions) {
                                if (elementIn2.definition) {
                                    meaningsValueDefinition = elementIn2.definition;
                                    break;
                                }
                            }
                            break;
                        }
                    }

                    // Example
                    for (const elementIn of elementOut.meanings) {
                        if (elementIn.definitions) {
                            for (const elementIn2 of elementIn.definitions) {
                                if (elementIn2.example) {
                                    meaningsValueExample = elementIn2.example;
                                    break;
                                }
                            }
                            break;
                        }
                    }

                    // Synonyms
                    for (const elementIn of elementOut.meanings) {
                        if (elementIn.synonyms && elementIn.synonyms.length > 0) {
                            meaningsSynonymsValue = elementIn.synonyms.join(", ");
                            break;
                        }
                    }

                    // Antonyms
                    for (const elementIn of elementOut.meanings) {
                        if (elementIn.antonyms && elementIn.antonyms.length > 0) {
                            meaningsAntonymsValue = elementIn.antonyms.join(", ");
                            break;
                        }
                    }
                }

                // Output values
                outputDiv.innerHTML += `<p><strong>Part of Speech:</strong> ${meaningsValuePartOfSpeech}</p>`;
                outputDiv.innerHTML += `<p><strong>Definition:</strong> ${meaningsValueDefinition}</p>`;
                outputDiv.innerHTML += `<p><strong>Example:</strong> ${meaningsValueExample}</p>`;
                outputDiv.innerHTML += `<p><strong>Synonyms:</strong> ${meaningsSynonymsValue}</p>`;
                outputDiv.innerHTML += `<p><strong>Antonyms:</strong> ${meaningsAntonymsValue}</p>`;
            }

            
            document.querySelector("input").value = "";
        })
        .catch(err => console.log(err));
});
