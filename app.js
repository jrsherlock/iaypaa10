/**
 * IAYPAA X PWA - From Muck to Miracle
 * Iowa City, IA 2026
 */

// Conference Schedule Data
const scheduleData = {
    friday: [
        {
            id: 'fri-1',
            time: '3:00 PM',
            endTime: '6:00 PM',
            title: 'Registration Open',
            venue: 'registration',
            venueLabel: 'Main Lobby',
            type: 'registration',
            description: 'Check in, pick up your name badge, and get your conference materials.'
        },
        {
            id: 'fri-2',
            time: '4:00 PM',
            endTime: '5:00 PM',
            title: 'Welcome to IAYPAA Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'New to IAYPAA? Join us for an introduction to what Iowa Young People in AA is all about!'
        },
        {
            id: 'fri-3',
            time: '5:00 PM',
            endTime: '6:00 PM',
            title: 'Supper Break',
            venue: 'outside',
            venueLabel: 'Various',
            type: 'social',
            description: 'Take a break and grab some food. Check out local restaurants nearby!'
        },
        {
            id: 'fri-4',
            time: '6:00 PM',
            endTime: '6:30 PM',
            title: 'Registration Close',
            venue: 'registration',
            venueLabel: 'Main Lobby',
            type: 'registration',
            description: 'Last chance for evening registration.'
        },
        {
            id: 'fri-5',
            time: '6:30 PM',
            endTime: '7:00 PM',
            title: 'Hype',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Get hyped for the conference! Energy, music, and excitement!'
        },
        {
            id: 'fri-6',
            time: '7:00 PM',
            endTime: '8:00 PM',
            title: 'State Roll Call',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Represent where you\'re from! Cheer for your home group and state.'
        },
        {
            id: 'fri-7',
            time: '8:00 PM',
            endTime: '9:30 PM',
            title: 'Main Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Friday night main speaker sharing their experience, strength, and hope.',
            featured: true
        },
        {
            id: 'fri-8',
            time: '9:30 PM',
            endTime: '11:00 PM',
            title: 'Dance - Costume Party',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Get creative with your costume! Dance the night away in recovery.',
            featured: true
        },
        {
            id: 'fri-9',
            time: '9:30 PM',
            endTime: '10:30 PM',
            title: 'Outside Meeting',
            venue: 'outside',
            venueLabel: 'Patio Area',
            type: 'meeting',
            description: 'Casual outdoor meeting. Cigar friendly.'
        },
        {
            id: 'fri-10',
            time: '11:00 PM',
            endTime: '12:00 AM',
            title: 'All the Desperation Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Late night panel discussing the desperation that brought us to recovery.'
        }
    ],
    saturday: [
        {
            id: 'sat-1',
            time: '8:00 AM',
            endTime: '10:00 AM',
            title: 'Bid Skits',
            venue: 'loft',
            venueLabel: 'The Loft',
            type: 'social',
            description: 'Cities bidding to host next year\'s IAYPAA present their creative skits!'
        },
        {
            id: 'sat-2',
            time: '10:00 AM',
            endTime: '11:00 AM',
            title: 'Working with the Newcomer Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Discussion on sponsorship and helping those new to the program.'
        },
        {
            id: 'sat-3',
            time: '10:00 AM',
            endTime: '11:00 AM',
            title: 'Al-Anon Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Panel for friends and family members of alcoholics.'
        },
        {
            id: 'sat-4',
            time: '10:00 AM',
            endTime: '1:00 PM',
            title: 'Field Day - Outside',
            venue: 'outside',
            venueLabel: 'Outdoor Area',
            type: 'social',
            description: 'Fun outdoor activities, games, and fellowship in the fresh air!'
        },
        {
            id: 'sat-5',
            time: '11:00 AM',
            endTime: '12:00 PM',
            title: 'Service Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Getting involved in AA service at all levels - from group to GSO.'
        },
        {
            id: 'sat-6',
            time: '11:00 AM',
            endTime: '12:00 PM',
            title: 'Dating in AA Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Navigating relationships in sobriety - the good, the bad, and the awkward.'
        },
        {
            id: 'sat-7',
            time: '12:00 PM',
            endTime: '1:00 PM',
            title: 'Noon Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Midday speaker sharing their journey in recovery.'
        },
        {
            id: 'sat-8',
            time: '1:00 PM',
            endTime: '2:00 PM',
            title: 'Lunch Break',
            venue: 'outside',
            venueLabel: 'Various',
            type: 'social',
            description: 'Grab lunch and recharge for the afternoon!'
        },
        {
            id: 'sat-9',
            time: '2:00 PM',
            endTime: '3:00 PM',
            title: 'Spiritual Solutions Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Exploring the spiritual side of the program and finding what works for you.'
        },
        {
            id: 'sat-10',
            time: '2:00 PM',
            endTime: '3:00 PM',
            title: 'Taking the Message into H&I Settings',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'Hospitals & Institutions service - carrying the message behind walls.'
        },
        {
            id: 'sat-11',
            time: '3:00 PM',
            endTime: '4:00 PM',
            title: 'Young in AA Panel',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'panel',
            description: 'Unique challenges and joys of getting sober young.'
        },
        {
            id: 'sat-12',
            time: '3:00 PM',
            endTime: '4:00 PM',
            title: 'Outside Issues Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout',
            type: 'panel',
            description: 'How we handle outside issues while keeping our primary purpose.'
        },
        {
            id: 'sat-13',
            time: '3:30 PM',
            endTime: '5:30 PM',
            title: 'Psychic',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Fun and mysterious entertainment - what does your sober future hold?'
        },
        {
            id: 'sat-14',
            time: '5:30 PM',
            endTime: '6:30 PM',
            title: 'Supper Break',
            venue: 'outside',
            venueLabel: 'Various',
            type: 'social',
            description: 'Dinner time! Fuel up for the evening activities.'
        },
        {
            id: 'sat-15',
            time: '6:30 PM',
            endTime: '7:00 PM',
            title: 'Hype',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Saturday night energy boost!'
        },
        {
            id: 'sat-16',
            time: '7:00 PM',
            endTime: '8:00 PM',
            title: 'Sobriety Countdown',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'meeting',
            description: 'Celebrate sobriety milestones together - from 24 hours to decades!',
            featured: true
        },
        {
            id: 'sat-17',
            time: '8:00 PM',
            endTime: '10:00 PM',
            title: 'Main Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Saturday night main speaker - the highlight of the conference!',
            featured: true
        },
        {
            id: 'sat-18',
            time: '10:00 PM',
            endTime: '12:00 AM',
            title: 'Dance - Monster Mash',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Get your groove on at the primordial ooze themed dance party!',
            featured: true
        },
        {
            id: 'sat-19',
            time: '10:00 PM',
            endTime: '12:00 AM',
            title: 'Karaoke',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'social',
            description: 'Show off your singing skills (or lack thereof) at late night karaoke!'
        }
    ],
    sunday: [
        {
            id: 'sun-1',
            time: '12:00 AM',
            endTime: '1:00 AM',
            title: 'Lack of Power Panel',
            venue: 'hideout',
            venueLabel: 'The Hideout (TBD)',
            type: 'panel',
            description: 'Late night/early morning panel on powerlessness and surrender.'
        },
        {
            id: 'sun-2',
            time: '7:30 AM',
            endTime: '8:30 AM',
            title: 'Upon Awakening Meditation',
            venue: 'board-room',
            venueLabel: 'Board Room',
            type: 'meeting',
            description: 'Start your morning with mindful meditation and reflection.'
        },
        {
            id: 'sun-3',
            time: '9:00 AM',
            endTime: '9:30 AM',
            title: 'Farewell',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Closing remarks and announcements for next year\'s conference.'
        },
        {
            id: 'sun-4',
            time: '9:30 AM',
            endTime: '10:30 AM',
            title: 'Spiritual Speaker',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'speaker',
            description: 'Sunday morning spiritual speaker to close out the conference.'
        },
        {
            id: 'sun-5',
            time: '10:30 AM',
            endTime: '12:00 PM',
            title: 'Final Clean Up & Send Off',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'social',
            description: 'Help clean up and say goodbye. See you next year!'
        }
    ]
};

// App State
const state = {
    currentView: 'home',
    currentDay: 'friday',
    mySchedule: {
        friday: [],
        saturday: [],
        sunday: []
    },
    venueFilter: 'all',
    typeFilter: 'all'
};

// Load saved schedule from localStorage
function loadSavedSchedule() {
    const saved = localStorage.getItem('iaypaa-x-schedule');
    if (saved) {
        try {
            state.mySchedule = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading saved schedule:', e);
        }
    }
}

// Save schedule to localStorage
function saveSchedule() {
    localStorage.setItem('iaypaa-x-schedule', JSON.stringify(state.mySchedule));
}

// DOM Elements
const elements = {
    splashScreen: document.getElementById('splash-screen'),
    mainContent: document.getElementById('main-content'),
    searchModal: document.getElementById('search-modal'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    eventsList: document.getElementById('events-list'),
    myScheduleList: document.getElementById('my-schedule-list'),
    emptySchedule: document.getElementById('empty-schedule'),
    currentEvents: document.getElementById('current-events'),
    eventModal: document.getElementById('event-modal'),
    eventDetail: document.getElementById('event-detail'),
    moreDrawer: document.getElementById('more-drawer'),
    toastContainer: document.getElementById('toast-container'),
    venueFilter: document.getElementById('venue-filter'),
    typeFilter: document.getElementById('type-filter')
};

// Initialize App
function init() {
    loadSavedSchedule();
    setupEventListeners();
    renderCurrentEvents();
    
    // Hide splash screen after animation
    setTimeout(() => {
        elements.splashScreen.classList.add('hidden');
    }, 2000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => handleNavigation(btn.dataset.view));
    });
    
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', () => handleNavigation(btn.dataset.view));
    });
    
    // Day Tabs
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', (e) => handleDayChange(e.target));
    });
    
    // Search
    document.getElementById('search-btn').addEventListener('click', openSearch);
    document.getElementById('close-search').addEventListener('click', closeSearch);
    elements.searchInput.addEventListener('input', handleSearch);
    
    // Filters
    elements.venueFilter?.addEventListener('change', handleFilterChange);
    elements.typeFilter?.addEventListener('change', handleFilterChange);
    
    // More Drawer
    document.querySelector('.close-drawer')?.addEventListener('click', closeDrawer);
    document.querySelector('.drawer-overlay')?.addEventListener('click', closeDrawer);
    
    // Modal Close
    document.querySelector('.modal-close')?.addEventListener('click', closeEventModal);
    elements.eventModal?.addEventListener('click', (e) => {
        if (e.target === elements.eventModal) closeEventModal();
    });
    
    // Install Button
    document.getElementById('install-btn')?.addEventListener('click', handleInstall);
    
    // Share Button
    document.getElementById('share-btn')?.addEventListener('click', handleShare);
}

// Navigation Handler
function handleNavigation(view) {
    if (view === 'more') {
        openDrawer();
        return;
    }
    
    closeDrawer();
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });
    
    // Update views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
    });
    
    const viewElement = document.getElementById(`${view}-view`);
    if (viewElement) {
        viewElement.classList.add('active');
        state.currentView = view;
        
        // Render content based on view
        if (view === 'events') {
            renderEvents();
        } else if (view === 'my-schedule') {
            renderMySchedule();
        }
    }
}

// Day Change Handler
function handleDayChange(tab) {
    const day = tab.dataset.day;
    const container = tab.closest('.day-tabs, .my-schedule-tabs');
    
    container.querySelectorAll('.day-tab').forEach(t => {
        t.classList.toggle('active', t === tab);
    });
    
    state.currentDay = day;
    
    if (state.currentView === 'events') {
        renderEvents();
    } else if (state.currentView === 'my-schedule') {
        renderMySchedule();
    }
}

// Filter Handler
function handleFilterChange() {
    state.venueFilter = elements.venueFilter.value;
    state.typeFilter = elements.typeFilter.value;
    renderEvents();
}

// Render Events List
function renderEvents() {
    const events = scheduleData[state.currentDay] || [];
    let filteredEvents = events;
    
    // Apply filters
    if (state.venueFilter !== 'all') {
        filteredEvents = filteredEvents.filter(e => e.venue === state.venueFilter);
    }
    if (state.typeFilter !== 'all') {
        filteredEvents = filteredEvents.filter(e => e.type === state.typeFilter);
    }
    
    elements.eventsList.innerHTML = filteredEvents.map(event => createEventCard(event, true)).join('');
    
    // Add click handlers
    elements.eventsList.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => openEventModal(card.dataset.id));
    });
}

// Render My Schedule
function renderMySchedule() {
    const myEvents = state.mySchedule[state.currentDay] || [];
    
    if (myEvents.length === 0) {
        elements.myScheduleList.innerHTML = '';
        elements.emptySchedule.classList.remove('hidden');
        return;
    }
    
    elements.emptySchedule.classList.add('hidden');
    
    // Get full event data for saved IDs
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const scheduleEvents = myEvents
        .map(id => allEvents.find(e => e.id === id))
        .filter(Boolean)
        .sort((a, b) => {
            const timeA = parseTime(a.time);
            const timeB = parseTime(b.time);
            return timeA - timeB;
        });
    
    elements.myScheduleList.innerHTML = scheduleEvents.map(event => 
        createEventCard(event, false, true)
    ).join('');
    
    // Add drag and drop
    setupDragAndDrop();
    
    // Add swipe to delete
    setupSwipeToDelete();
    
    // Add click handlers
    elements.myScheduleList.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('swiping')) {
                openEventModal(card.dataset.id);
            }
        });
    });
}

// Parse time string to minutes for sorting
function parseTime(timeStr) {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
}

// Create Event Card HTML
function createEventCard(event, showAddIndicator = false, isDraggable = false) {
    const isAdded = isEventInSchedule(event.id);
    const draggableAttr = isDraggable ? 'draggable="true"' : '';
    
    return `
        <div class="event-card ${isAdded && showAddIndicator ? 'added' : ''}" 
             data-id="${event.id}" 
             data-venue="${event.venue}"
             ${draggableAttr}>
            <div class="event-time">${event.time}${event.endTime ? ' - ' + event.endTime : ''}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-meta">
                <span class="event-venue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${event.venueLabel}
                </span>
                <span class="event-type">${event.type}</span>
            </div>
            ${isDraggable ? '<div class="delete-indicator">🗑️</div>' : ''}
        </div>
    `;
}

// Check if event is in schedule
function isEventInSchedule(eventId) {
    return Object.values(state.mySchedule).some(day => day.includes(eventId));
}

// Get day for event
function getDayForEvent(eventId) {
    for (const [day, events] of Object.entries(scheduleData)) {
        if (events.some(e => e.id === eventId)) {
            return day;
        }
    }
    return null;
}

// Open Event Modal
function openEventModal(eventId) {
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const event = allEvents.find(e => e.id === eventId);
    
    if (!event) return;
    
    const isAdded = isEventInSchedule(eventId);
    
    elements.eventDetail.innerHTML = `
        <div class="event-detail-time">${event.time}${event.endTime ? ' - ' + event.endTime : ''}</div>
        <h2 class="event-detail-title">${event.title}</h2>
        <div class="event-detail-info">
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${event.venueLabel}</span>
            </div>
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                </svg>
                <span>${capitalizeFirst(getDayForEvent(eventId) || '')}</span>
            </div>
        </div>
        <p class="event-detail-description">${event.description}</p>
        <div class="event-detail-actions">
            <button class="btn-primary" id="toggle-schedule-btn">
                ${isAdded ? '✓ In My Schedule' : '+ Add to Schedule'}
            </button>
        </div>
    `;
    
    document.getElementById('toggle-schedule-btn').addEventListener('click', () => {
        toggleEventInSchedule(eventId);
        closeEventModal();
    });
    
    elements.eventModal.classList.remove('hidden');
}

// Close Event Modal
function closeEventModal() {
    elements.eventModal.classList.add('hidden');
}

// Toggle Event in Schedule
function toggleEventInSchedule(eventId) {
    const day = getDayForEvent(eventId);
    if (!day) return;
    
    const index = state.mySchedule[day].indexOf(eventId);
    
    if (index > -1) {
        state.mySchedule[day].splice(index, 1);
        showToast('Removed from schedule');
    } else {
        state.mySchedule[day].push(eventId);
        showToast('Added to schedule', 'success');
    }
    
    saveSchedule();
    
    // Re-render if on events or my-schedule view
    if (state.currentView === 'events') {
        renderEvents();
    } else if (state.currentView === 'my-schedule') {
        renderMySchedule();
    }
}

// Remove Event from Schedule
function removeFromSchedule(eventId) {
    const day = getDayForEvent(eventId);
    if (!day) return;
    
    const index = state.mySchedule[day].indexOf(eventId);
    if (index > -1) {
        state.mySchedule[day].splice(index, 1);
        saveSchedule();
        showToast('Removed from schedule');
        renderMySchedule();
    }
}

// Drag and Drop Setup
function setupDragAndDrop() {
    const cards = elements.myScheduleList.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('drop', handleDrop);
        card.addEventListener('dragenter', handleDragEnter);
        card.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id);
}

function handleDragEnd() {
    this.classList.remove('dragging');
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    if (this !== draggedElement) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave() {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    
    if (this === draggedElement) return;
    
    const fromId = e.dataTransfer.getData('text/plain');
    const toId = this.dataset.id;
    
    // Reorder in schedule
    const day = state.currentDay;
    const fromIndex = state.mySchedule[day].indexOf(fromId);
    const toIndex = state.mySchedule[day].indexOf(toId);
    
    if (fromIndex > -1 && toIndex > -1) {
        state.mySchedule[day].splice(fromIndex, 1);
        state.mySchedule[day].splice(toIndex, 0, fromId);
        saveSchedule();
        renderMySchedule();
    }
}

// Swipe to Delete Setup
function setupSwipeToDelete() {
    const cards = elements.myScheduleList.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            
            if (diff > 20) {
                card.classList.add('swiping');
                card.style.transform = `translateX(${-Math.min(diff, 100)}px)`;
            }
        });
        
        card.addEventListener('touchend', () => {
            isDragging = false;
            const diff = startX - currentX;
            
            if (diff > 80) {
                // Delete the event
                removeFromSchedule(card.dataset.id);
            } else {
                card.style.transform = '';
                card.classList.remove('swiping');
            }
        });
    });
}

// Render Current Events (for home page)
function renderCurrentEvents() {
    // For demo purposes, show upcoming events
    const upcomingEvents = scheduleData.friday.slice(0, 3);
    
    elements.currentEvents.innerHTML = `
        <p class="text-muted" style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
            Conference events coming soon! Check back during the event for live updates.
        </p>
        ${upcomingEvents.map(event => `
            <div class="event-card" data-id="${event.id}" data-venue="${event.venue}" style="cursor: pointer;">
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-meta">
                    <span class="event-venue">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${event.venueLabel}
                    </span>
                </div>
            </div>
        `).join('')}
    `;
    
    // Add click handlers
    elements.currentEvents.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => openEventModal(card.dataset.id));
    });
}

// Search Functions
function openSearch() {
    elements.searchModal.classList.remove('hidden');
    elements.searchInput.focus();
}

function closeSearch() {
    elements.searchModal.classList.add('hidden');
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length < 2) {
        elements.searchResults.innerHTML = '';
        return;
    }
    
    const allEvents = [...scheduleData.friday, ...scheduleData.saturday, ...scheduleData.sunday];
    const results = allEvents.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.venueLabel.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        elements.searchResults.innerHTML = '<div class="no-results">No events found</div>';
        return;
    }
    
    elements.searchResults.innerHTML = results.map(event => createEventCard(event, true)).join('');
    
    // Add click handlers
    elements.searchResults.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            closeSearch();
            openEventModal(card.dataset.id);
        });
    });
}

// Drawer Functions
function openDrawer() {
    elements.moreDrawer.classList.remove('hidden');
}

function closeDrawer() {
    elements.moreDrawer.classList.add('hidden');
}

// Toast Notifications
function showToast(message, type = '') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// PWA Install
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

function handleInstall() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                showToast('App installed!', 'success');
            }
            deferredPrompt = null;
        });
    } else {
        // Show manual install instructions
        showToast('Add to Home Screen from your browser menu');
    }
    closeDrawer();
}

// Share
async function handleShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'IAYPAA X - From Muck to Miracle',
                text: 'Check out the IAYPAA X conference app!',
                url: window.location.href
            });
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
    }
    closeDrawer();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
