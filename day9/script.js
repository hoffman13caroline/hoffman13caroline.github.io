   function addItem() {
            const input = document.getElementById("newItem");
            const itemText = input.value.trim();

            // Don't add an empty item
            if (itemText === "") {
                return;
            }

            // Create a new list item
            const listItem = document.createElement("li");

            // Create a checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            // Add checkbox and text to the list item
            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(" " + itemText));

            // Add the item to the unordered list
            document.getElementById("checklistItems").appendChild(listItem);

            // Clear the text box
            input.value = "";

            // Put the cursor back in the text box
            input.focus();
        }

        // Allow the Enter key to add an item
        document.getElementById("newItem").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addItem();
            }
        });