let plants = [
    {
      id: 1,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price: "R2000",
    },
    {
      id: 2,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price:  'R2000',
    },
    {
      id: 1,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price: "R2000",
    },
    {
      id: 2,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price:  'R2000',
    },
    {
      id: 1,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price: "R2000",
    },
    {
      id: 2,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price:  'R2000',
    },
    {
      id: 1,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price: "R2000",
    },
    {
      id: 2,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price:  'R2000',
    },
    {
      id: 1,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price: "R2000",
    },
    {
      id: 2,
      name: 'Aloe',
      image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
      price:  'R2000',
    },
  ];
  
  // render the plant list
  function renderPlantList() {
    const plantList = document.getElementById('plantList');
    plantList.innerHTML = '';
  
    plants.forEach(plant => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}" width="100">
        <div>${plant.name}</div>
        <div>${plant.price}</div>
        <button class="editButton" data-id="${plant.id}">Edit</button>
        <button class="deleteButton" data-id="${plant.id}">Delete</button>
      `;
      plantList.appendChild(listItem);
    });
  }
  
  // handle submission
  function addPlant(event) {
    event.preventDefault();
  
    const plantNameInput = document.getElementById('plantName');
    const plantImageInput = document.getElementById('plantImage');
    const plantPriceInput = document.getElementById('plantPrice');
  
    const plantName = plantNameInput.value;
    const plantImage = plantImageInput.value;
    const plantPrice = plantPriceInput.value;
  
    if (plantName && plantImage && plantPrice) {
      const newPlantId = plants.length + 1;
  
      // new plant object
      const newPlant = {
        id: newPlantId,
        name: plantName,
        image: plantImage,
        price: parseInt(plantPrice),
      };
  
      // new plant to list
      plants.push(newPlant);
  
      // Render updated list
      renderPlantList();
  
      // Reset 
      plantNameInput.value = '';
      plantImageInput.value = '';
      plantPriceInput.value = '';
    }
  }
  
  // delete button
  function deletePlant(event) {
    const plantId = parseInt(event.target.dataset.id);
    plants = plants.filter(plant => plant.id !== plantId);
    renderPlantList();
  }
  
  // edit button
  function editPlant(event) {
    const plantId = parseInt(event.target.dataset.id);
    const plant = plants.find(plant => plant.id === plantId);
    if (plant) {
      // edit
      console.log(`Edit plant with ID: ${plant.id}`);
    }
  }
  
  // listeners
  const addPlantForm = document.getElementById('addPlantForm');
  addPlantForm.addEventListener('submit', addPlant);
  
  const plantList = document.getElementById('plantList');
  plantList.addEventListener('click', event => {
    if (event.target.classList.contains('deleteButton')) {
      deletePlant(event);
    } else if (event.target.classList.contains('editButton')) {
      editPlant(event);
    }
  });
  
  // rendering plant list
  renderPlantList();
  