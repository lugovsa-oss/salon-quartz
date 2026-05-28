(function () {
  function getSelectedText() {
    const text = window.getSelection().toString().trim();
    return text.length > 500 ? text.slice(0, 500) + "…" : text;
  }

  async function sendTypoReport(selectedText, comment) {
    const response = await fetch("/api/typo-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page_url: window.location.href,
        selected_text: selectedText,
        comment: comment || ""
      })
    });

    return response.json();
  }

  document.addEventListener("keydown", async function (event) {
    if (!(event.ctrlKey && event.key === "Enter")) return;

    const selectedText = getSelectedText();

    if (!selectedText) {
      alert("Сначала выделите текст с ошибкой.");
      return;
    }

    const comment = prompt(
      "Сообщить об ошибке в выделенном тексте:\n\n" + selectedText + "\n\nКомментарий:"
    );

    if (comment === null) return;

    try {
      const result = await sendTypoReport(selectedText, comment);

      if (result.ok) {
        alert("Спасибо! Сообщение отправлено.");
      } else {
        alert("Не удалось отправить сообщение: " + (result.error || "unknown error"));
      }
    } catch (err) {
      alert("Ошибка отправки: " + err);
    }
  });
})();
