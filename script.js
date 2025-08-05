// Smooth scroll for CTA
const startAnalysisBtn = document.getElementById('startAnalysisBtn');
if (startAnalysisBtn) {
  startAnalysisBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' });
  });
}

// Tab switching logic
const tabBugs = document.getElementById('tabBugs');
const tabSuggestions = document.getElementById('tabSuggestions');
const bugSection = document.getElementById('analyzer');
const suggestionsSection = document.getElementById('suggestions');

function showTab(tab) {
  if (tab === 'bugs') {
    tabBugs.classList.add('active');
    tabSuggestions.classList.remove('active');
    bugSection.classList.remove('hidden');
    suggestionsSection.classList.add('hidden');
  } else {
    tabSuggestions.classList.add('active');
    tabBugs.classList.remove('active');
    suggestionsSection.classList.remove('hidden');
    bugSection.classList.add('hidden');
  }
}

if (tabBugs && tabSuggestions) {
  tabBugs.addEventListener('click', () => showTab('bugs'));
  tabSuggestions.addEventListener('click', () => showTab('suggestions'));
}

// Bug analysis form logic
const bugForm = document.getElementById('bugForm');
const urlInput = document.getElementById('urlInput');
const bugResults = document.getElementById('bugResults');
const aiSuggestions = document.getElementById('aiSuggestions');

function validateUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

if (bugForm) {
  bugForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const url = urlInput.value.trim();
    if (!validateUrl(url)) {
      bugResults.textContent = 'Please enter a valid URL (starting with http:// or https://).';
      bugResults.classList.add('text-red-500');
      return;
    }
    bugResults.classList.remove('text-red-500');
    bugResults.innerHTML = '<span class="animate-pulse">Analyzing UI bugs...</span>';
    aiSuggestions.innerHTML = '<span class="text-gray-400">AI suggestions will appear here after analysis.</span>';
    showTab('bugs');
    try {
      // Fetch UI bug results
      const res = await fetch('/api/analyse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      if (!res.ok) throw new Error('Failed to analyze UI.');
      const data = await res.json();
      bugResults.innerHTML = data.bugs && data.bugs.length
        ? `<ul class='list-disc pl-6 space-y-2'>${data.bugs.map(bug => `<li>${bug}</li>`).join('')}</ul>`
        : '<span class="text-green-600">No UI bugs detected!</span>';
      // Fetch AI suggestions
      const sugRes = await fetch(`/api/suggestions/${encodeURIComponent(url)}`);
      if (!sugRes.ok) throw new Error('Failed to fetch suggestions.');
      const sugData = await sugRes.json();
      aiSuggestions.innerHTML = sugData.suggestions && sugData.suggestions.length
        ? `<ul class='list-disc pl-6 space-y-2'>${sugData.suggestions.map(s => `<li>${s}</li>`).join('')}</ul>`
        : '<span class="text-gray-400">No suggestions available.</span>';
      // Switch to suggestions tab
      showTab('suggestions');
    } catch (err) {
      bugResults.textContent = 'Error: ' + err.message;
      bugResults.classList.add('text-red-500');
      aiSuggestions.innerHTML = '<span class="text-red-500">Could not fetch suggestions.</span>';
    }
  });
}
