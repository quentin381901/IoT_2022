import webbrowser
urL='https://www.google.com'
chrome_path="/usr/bin/chromium-browser"
webbrowser.register('chromium-browser', None,webbrowser.BackgroundBrowser(chrome_path),1)
webbrowser.get('chromium-browser').open_new_tab(urL)