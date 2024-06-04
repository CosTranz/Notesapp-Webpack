(() => {
  class e extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "<header><h1>My Notes App</h1></header>";
    }
  }
  class t extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
        '\n            <form id="noteForm">\n            <input type="text" id="noteTitle" placeholder="Judul">\n            <textarea id="noteBody" placeholder="Buat Catatan..."></textarea>\n            <button type="submit">Add Note</button>\n            <div id="formError" class="error"></div>\n            </form>\n        ';
    }
  }
  class n extends HTMLElement {
    set note(e) {
      this.innerHTML = `\n            <div class="noteItem">\n            <h3>${e.title}</h3>\n            <p>${e.body}</p>\n            </div>\n        `;
    }
  }
  customElements.define("app-header", e),
    customElements.define("note-form", t),
    customElements.define("note-item", n);
  const o = [
    {
      id: "notes-jT-jjsyz61J8XKiI",
      title: "Welcome to Notes, Dimas!",
      body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      createdAt: "2022-07-28T10:03:12.594Z",
      archived: !1,
    },
    {
      id: "notes-aB-cdefg12345",
      title: "Meeting Agenda",
      body: "Discuss project updates and assign tasks for the upcoming week.",
      createdAt: "2022-08-05T15:30:00.000Z",
      archived: !1,
    },
    {
      id: "notes-XyZ-789012345",
      title: "Shopping List",
      body: "Milk, eggs, bread, fruits, and vegetables.",
      createdAt: "2022-08-10T08:45:23.120Z",
      archived: !1,
    },
    {
      id: "notes-1a-2b3c4d5e6f",
      title: "Personal Goals",
      body: "Read two books per month, exercise three times a week, learn a new language.",
      createdAt: "2022-08-15T18:12:55.789Z",
      archived: !1,
    },
    {
      id: "notes-LMN-456789",
      title: "Recipe: Spaghetti Bolognese",
      body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
      createdAt: "2022-08-20T12:30:40.200Z",
      archived: !1,
    },
    {
      id: "notes-QwErTyUiOp",
      title: "Workout Routine",
      body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
      createdAt: "2022-08-25T09:15:17.890Z",
      archived: !1,
    },
    {
      id: "notes-abcdef-987654",
      title: "Book Recommendations",
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: "2022-09-01T14:20:05.321Z",
      archived: !1,
    },
    {
      id: "notes-zyxwv-54321",
      title: "Daily Reflections",
      body: "Write down three positive things that happened today and one thing to improve tomorrow.",
      createdAt: "2022-09-07T20:40:30.150Z",
      archived: !1,
    },
    {
      id: "notes-poiuyt-987654",
      title: "Travel Bucket List",
      body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
      createdAt: "2022-09-15T11:55:44.678Z",
      archived: !1,
    },
    {
      id: "notes-asdfgh-123456",
      title: "Coding Projects",
      body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
      createdAt: "2022-09-20T17:10:12.987Z",
      archived: !1,
    },
    {
      id: "notes-5678-abcd-efgh",
      title: "Project Deadline",
      body: "Complete project tasks by the deadline on October 1st.",
      createdAt: "2022-09-28T14:00:00.000Z",
      archived: !1,
    },
    {
      id: "notes-9876-wxyz-1234",
      title: "Health Checkup",
      body: "Schedule a routine health checkup with the doctor.",
      createdAt: "2022-10-05T09:30:45.600Z",
      archived: !1,
    },
    {
      id: "notes-qwerty-8765-4321",
      title: "Financial Goals",
      body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
      createdAt: "2022-10-12T12:15:30.890Z",
      archived: !1,
    },
    {
      id: "notes-98765-54321-12345",
      title: "Holiday Plans",
      body: "Research and plan for the upcoming holiday destination.",
      createdAt: "2022-10-20T16:45:00.000Z",
      archived: !1,
    },
    {
      id: "notes-1234-abcd-5678",
      title: "Language Learning",
      body: "Practice Spanish vocabulary for 30 minutes every day.",
      createdAt: "2022-10-28T08:00:20.120Z",
      archived: !1,
    },
  ];
  function d() {
    const e = document.getElementById("noteList");
    (e.innerHTML = ""),
      o.forEach((t) => {
        const n = document.createElement("note-item");
        (n.note = t), e.appendChild(n);
      });
  }
  document.getElementById("noteForm").addEventListener("submit", function (e) {
    e.preventDefault(),
      (function () {
        const e = document.getElementById("noteForm"),
          t = document.getElementById("noteTitle").value,
          n = document.getElementById("noteBody").value;
        if (!t || !n)
          return void (document.getElementById("formError").innerText =
            "Mohon isi Judul dan Catatan!");
        const i = Math.random().toString(36).substring(7);
        o.push({ id: i, title: t, body: n }),
          d(),
          e.reset(),
          (document.getElementById("formError").innerText = "");
      })();
  }),
    d();
})();
