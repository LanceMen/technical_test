//Descriptions included in JSON format
var data = [
    {
        "title": "Injured / ill worker",
        "img": "img/iw.png",
        "name": "injured",
        "priorities": [
            "Recovery",
            "Ensuring benefits received/paid",
            "Ensuring claim continues",
            "Communication with all parties: family, doctor, employer, insurer"
        ],
        "concerns": [
            "Fear of re-injury",
            "Being pushed to return to work before feeling ready",
            "Uncertainty with what is happening at work while away",
            "Concern with what employer and co-workers think",
            "Claim eligibility and continuing to prove need for benefits"
        ]
    },

    {
        "title": "Direct Supervisor",
        "img": "img/dsv.png",
        "name": "directsupervisor",
        "priorities": [
            "Productivity",
            "Replacement of absent worker",
            "Training replacement workers",
            "Containing costs associated with absence",
            "Communication with union, absent worker and co-workers"
        ],
        "concerns": [
            "Creating return to work opportunities",
            "Cost of supporting return to work",
            "Co-worker complaints",
            "Administration time to manage the absent worker's claim",
            "Work slow down or disruption caused by absence and then return to work"
        ]
    },

    {
        "title": "Union Representative",
        "img": "img/ur.png",
        "name": "unionrep",
        "priorities": [
            "Worker receiving benefits to which they are entitled",
            "Advocating for rights of absent worker and co-workers",
            "Protecting Collective Agreement",
            "Participating in incident investigation to ensure safe workplace"
        ],
        "concerns": [
            "Ensuring member is paid appropriately and in a timely manner",
            "Members being injured",
            "Members being re-injured",
            "Ensuring overtime, training opportunities are assigned by seniority",
            "Members being supported in return to work efforts (supported by management, insurer and co-workers)"
        ]
    },

    {
        "title": "Physician",
        "img": "img/phy.png",
        "name": "physician",
        "priorities": [
            "Recovery",
            "Symptom management",
            "Referrals for diagnostic tests or specialists are done in a timely manner",
            "Confidentiality of patient's information",
            "Being a patient advocate"
        ],
        "concerns": [
            "Seeing the patient for follow up at an appropriate time",
            "Understanding the patient's job and return to work opportunities",
            "Completing paperwork in a timely manner",
            "Communicating with employer and insurer on claim and return to work",
            "Supporting return to work in a timely and appropriate manner"
        ]
    },

    {
        "title": "Insurance provider",
        "img": "img/ip.png",
        "name": "insurance",
        "priorities": [
            "Contain costs of claim",
            "Validate eligibility for claim",
            "Conclude claim quickly"
        ],
        "concerns": [
            "Communication with worker",
            "Explaining insurance process to worker",
            "Obtaining medical documentation to support claim",
            "Working with employer, worker and physician on return to work opportunities"
        ]
    },

    {
        "title": "Co-worker",
        "img": "img/cw.png",
        "name": "coworker",
        "priorities": [
            "Doing their own job well",
            "Maintaining health and wellness at work",
            "Avoiding injury"
        ],
        "concerns": [
            "Working harder because of the absent worker",
            "Training for a new job to cover the absence",
            "Fear of injury ",
            "Increased overtime",
            "Less recovery time or shortened breaks",
            "Doing a job they are not accustomed to",
            "Not having their rights violated under the collective agreement"
        ]
    },

    {
        "title": "Disability Case / Management Professional",
        "img": "img/dc.png",
        "name": "disabilitycase",
        "priorities": [
            "Communicating with all stakeholders on absence duration",
            "Communicating with absent worker in a timely and regular manner",
            "Ensuring worker receiving appropriate medical treatment",
            "Ensuring worker receiving benefits they are entitled to",
            "Understanding the worker's job and how the job demands might impact return to work efforts",
            "Exploring temporary accommodation measures to support return to work"
        ],
        "concerns": [
            "Health and wellness of worker - potential for delay in recovery or re-injury",
            "Adequate medical intervention starting with correct diagnosis",
            "Trust and cooperation of the physician or healthcare team",
            "Cooperation and support from insurance provider",
            "Understanding worker's progress in rehabilitation ",
            "Cooperation with supervisors, union, co-workers on return to work opportunities",
            "Managing a large case load",
            "Safe and sustainable return to work plans implemented at the right time"
        ]
    }
];

//console.log(data)

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".area-drop");

// Event listeners for Drag and Drop operations
draggableElements.forEach(elemdrag => {
    elemdrag.addEventListener("dragstart", dragStart, false);
    //    elemdrag.addEventListener("drag", drag);
    //    elemdrag.addEventListener("dragend", dragEnd);
});

droppableElements.forEach(elemdrop => {
    elemdrop.addEventListener("dragenter", dragEnter, false);                            //fires when object enters the valid drop zone
    elemdrop.addEventListener("drop", dropped, false);                                   //fires when object dropped in the area
    elemdrop.addEventListener("dragover", function (e) { e.preventDefault(); }, false);     //fires when dragging over the drop area
    elemdrop.addEventListener("dragleave", dropleave, false);
});

// Drag and Drop Actions

function dragStart(event) {
    event.target.style.opacity = .5;
    event.dataTransfer.setData("text", event.target.id);
    //DataTransfer objects are used to expose the data that underlies a drag-and-drop operation.
    //The data that underlies a drag-and-drop operation, known as the drag data store, consists of 
    //an unordered list of items representing the dragged data, and some information used to generate the UI feedback during the drag.
    //get the id attribute of dragged team member
}

function dragEnter(event) {
    event.target.classList.add("droppable-hover");
}

function dropleave(event) {
    event.target.classList.remove("droppable-hover");
}

//update information at droppable area
function updateData(id, img) {
    document.getElementById('main').innerHTML = id;
    document.getElementById('main-image').src = img;
}

function dropped(event) {
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("text");

    //search through JSON file to find the matching elements by "name" attribute
    dataArray = data.find(i => {
        return i.name === draggableElementData
    });
    //console.log(dataArray)

    //change content repectively at priorities and concerns area
    updateData(dataArray.title, dataArray.img);
    var ul = document.getElementById("t1");
    ul.innerHTML = "";
    //clean up the previous selection
    var ul2 = document.getElementById("t2");
    ul2.innerHTML = "";
    //clean up the previous selection

    //console.log(data.length);

    for (var i = 0; i < dataArray.priorities.length; i++) {
        
        //appending list to priorities area
        var li = document.createElement("li");
        //creates HTML element "li"
        li.appendChild(document.createTextNode(dataArray.priorities[i]));
        ul.appendChild(li);
    }

    for (var i = 0; i < dataArray.concerns.length; i++) {
        
        //appending list to concerns area
        var li = document.createElement("li");
        //creates HTML element "li"
        li.appendChild(document.createTextNode(dataArray.concerns[i]));
        ul2.appendChild(li);
    }
    
    //console.log(li)
}