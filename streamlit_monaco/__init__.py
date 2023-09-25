from streamlit_monaco.core.frame import new_frame as _new_frame
from streamlit_monaco.core.exceptions import *
from streamlit_monaco.modules import *

__version__ = "0.1.0"


def elements(key: str) -> None:
    """Create a Streamlit Elements frame."""
    return _new_frame(key)
