// Select elements
const searchInput = document.querySelector('.search-bar input[type="search"]');
const searchButton = document.querySelector('.search-bar button[type="submit"]');
const mentorshipList = document.querySelector('.mentorship-matching ul');
const filteringOptions = document.querySelectorAll('.filtering-options select');
const sortingOptions = document.querySelector('.sorting-options select');
const messagingTextarea = document.querySelector('.messaging-system textarea');
const messagingButton = document.querySelector('.messaging-system button[type="submit"]');

// Sample data for mentorship list
const mentorshipData = [
  { name: 'John Doe', location: 'New York', industry: 'Tech', jobFunction: 'Software Engineer' },
  { name: 'Jane Smith', location: 'San Francisco', industry: 'Finance', jobFunction: 'Financial Analyst' },
  { name: 'Bob Johnson', location: 'Chicago', industry: 'Healthcare', jobFunction: 'Doctor'}
  // Add more data here...
];

// Render initial mentorship list
renderMentorshipList(mentorshipData);

// Add event listeners
searchButton.addEventListener('click', handleSearch);
filteringOptions.forEach(option => option.addEventListener('change', handleFiltering));
sortingOptions.addEventListener('change', handleSorting);
messagingButton.addEventListener('click', handleMessaging);

// Functions
function handleSearch() {
  const searchTerm = searchInput.value.trim();
  const filteredData = mentorshipData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  renderMentorshipList(filteredData);
}

function handleFiltering(event) {
  const filterObject = {};
  filteringOptions.forEach(option => {
    if (option.value !== '') {
      filterObject[option.name] = option.value;
    }
  });
  const filteredData = filterData(mentorshipData, filterObject);
  renderMentorshipList(filteredData);
}

function handleSorting(event) {
  const sortKey = sortingOptions.value;
  const sortedData = sortData(mentorshipData, sortKey);
  renderMentorshipList(sortedData);
}

function handleMessaging() {
  const messageText = messagingTextarea.value.trim();
  // TO DO: Implement messaging logic
  console.log(`Sending message: ${messageText}`);
}

function renderMentorshipList(data) {
  const mentorshipListHtml = data.map(item => {
    return `<li> <h3>${item.name}</h3> <p>Location: ${item.location}</p> <p>Industry: ${item.industry}</p> <p>Job Function: ${item.jobFunction}</p> <p>Skills: ${item.skills}</p> </li>`;
  }).join('');
  mentorshipList.innerHTML = mentorshipListHtml;
}

function filterData(data, filterObject) {
  return data.filter(item => {
    for (const key in filterObject) {
      if (item[key] !== filterObject[key]) {
        return false;
      }
    }
    return true;
  });
}

function sortData(data, sortKey) {
  return data.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
}



