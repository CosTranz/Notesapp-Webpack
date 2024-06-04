import "./style/style.css";

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>My Notes App</h1>
      </header>`;
  }
}

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="noteForm">
        <input type="text" id="noteTitle" placeholder="Judul">
        <textarea id="noteBody" placeholder="Buat Catatan..."></textarea>
        <button type="submit">Add Note</button>
        <div id="formError" class="error"></div>
      </form>
    `;
  }
}

class NoteItem extends HTMLElement {
  set note(note) {
    this.innerHTML = `
      <div class="noteItem">
        <h3>${note.title}</h3>
        <p>${note.body}</p>
        <button class="delete-btn">Delete</button>
        <button class="archive-btn">Archive</button>
      </div>
    `;
  }
}

class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
}

class ArchiveItem extends HTMLElement {
  set note(note) {
    const archiveItem = document.createElement("div");
    archiveItem.classList.add("archiveItem");
    archiveItem.innerHTML = `
      <p class ="archive-p">Archive</p>
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <button class="unarchive-btn">Unarchive</button>
    `;

    const unarchiveButton = archiveItem.querySelector(".unarchive-btn");
    unarchiveButton.addEventListener("click", async () => {
      await unarchiveNoteAPI(note.id);
      displayNotes();
      displayArchivedNotes();
    });

    this.appendChild(archiveItem);
  }
}

customElements.define("loading-indicator", LoadingIndicator);
customElements.define("app-header", AppHeader);
customElements.define("note-form", NoteForm);
customElements.define("note-item", NoteItem);
customElements.define("archive-item", ArchiveItem);

async function fetchNotes() {
  try {
    const response = await fetch("https://notes-api.dicoding.dev/v2/notes");
    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return { data: [] };
  }
}

async function addNoteAPI(noteTitle, noteBody) {
  try {
    const response = await fetch("https://notes-api.dicoding.dev/v2/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: noteTitle,
        body: noteBody,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to add note");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
}

async function deleteNoteAPI(noteId) {
  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${noteId}`,
      {
        method: "DELETE",
      },
    );
    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
}

async function archiveNoteAPI(noteId) {
  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${noteId}/archive`,
      {
        method: "POST",
      },
    );
    if (!response.ok) {
      throw new Error("Failed to archive note");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error archiving note:", error);
    throw error;
  }
}

async function unarchiveNoteAPI(noteId) {
  try {
    const response = await fetch(
      `https://notes-api.dicoding.dev/v2/notes/${noteId}/unarchive`,
      {
        method: "POST",
      },
    );
    if (!response.ok) {
      throw new Error("Failed to unarchive note");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error unarchiving note:", error);
    throw error;
  }
}

async function fetchArchivedNotes() {
  try {
    const response = await fetch(
      "https://notes-api.dicoding.dev/v2/notes/archived",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch archived notes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching archived notes:", error);
    return {
      status: "error",
      message: "Failed to fetch archived notes",
      data: [],
    };
  }
}

document.getElementById("archiveButton").addEventListener("click", async () => {
  const archivedNoteList = document.getElementById("archivedNoteList");
  if (archivedNoteList.style.display === "none") {
    archivedNoteList.style.display = "block";
    await displayArchivedNotes();
  } else {
    archivedNoteList.style.display = "none";
  }
});

function attachEventListeners(noteItem) {
  const deleteButton = noteItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", async () => {
    const noteId = noteItem.dataset.noteId;
    await deleteNoteAPI(noteId);
    displayNotes();
  });

  const archiveButton = noteItem.querySelector(".archive-btn");
  archiveButton.addEventListener("click", async () => {
    const noteId = noteItem.dataset.noteId;
    await archiveNoteAPI(noteId);
    displayNotes();
  });
}

async function displayArchivedNotes() {
  const archivedNoteList = document.getElementById("archivedNoteList");
  archivedNoteList.innerHTML = "";
  const archivedNotesData = await fetchArchivedNotes();
  try {
    archivedNotesData.data.forEach((note) => {
      const archiveItem = document.createElement("archive-item");
      archiveItem.note = note;
      archivedNoteList.appendChild(archiveItem);
    });
  } catch (error) {
    console.error("Error displaying archived notes:", error);
    alert("Failed to display archived notes. Please try again later.");
  }
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const allNotes = document.querySelectorAll("note-item");

  allNotes.forEach((note) => {
    const title = note.querySelector("h3").innerText.toLowerCase();
    const body = note.querySelector("p").innerText.toLowerCase();
    const shouldShow = title.includes(searchTerm) || body.includes(searchTerm);
    note.style.display = shouldShow ? "block" : "none";
  });
});

async function displayNotes() {
  const loadingIndicator = document.getElementById("loadingIndicator");
  loadingIndicator.style.display = "block";
  const notesData = await fetchNotes();
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  try {
    notesData.data.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.note = note;
      noteItem.dataset.noteId = note.id;
      noteList.appendChild(noteItem);

      attachEventListeners(noteItem);
    });
  } catch (error) {
    console.error("Error displaying notes:", error);
    alert("Failed to display notes. Please try again later.");
  } finally {
    loadingIndicator.style.display = "none";
  }
}

async function addNote() {
  const noteForm = document.getElementById("noteForm");
  const noteTitle = document.getElementById("noteTitle").value;
  const noteBody = document.getElementById("noteBody").value;

  if (!noteTitle || !noteBody) {
    document.getElementById("formError").innerText =
      "Mohon isi Judul dan Catatan!";
    return;
  }

  try {
    await addNoteAPI(noteTitle, noteBody);
    await displayNotes();
    noteForm.reset();
    document.getElementById("formError").innerText = "";
  } catch (error) {
    console.error("Error adding note:", error);
    alert("Failed to add note. Please try again later.");
  }
}

document
  .getElementById("noteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addNote();
  });

displayNotes();
displayArchivedNotes();
