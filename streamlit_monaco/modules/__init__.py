from streamlit_monaco.modules.callbacks import sync, lazy, partial
from streamlit_monaco.modules.dashboard import Dashboard
from streamlit_monaco.modules.editors import Editors
from streamlit_monaco.modules.events import Events
from streamlit_monaco.modules.html import HTML
from streamlit_monaco.modules.media import Media
from streamlit_monaco.modules.mui import MUI
from streamlit_monaco.modules.nivo import Nivo

__all__ = [
    "dashboard",
    "editor",
    "event",
    "html",
    "lazy",
    "media",
    "mui",
    "nivo",
    "partial",
    "sync",
]


dashboard = Dashboard()
editor = Editors()
event = Events()
html = HTML()
media = Media()
mui = MUI()
nivo = Nivo()
