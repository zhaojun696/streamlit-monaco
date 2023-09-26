from streamlit_monaco import st_monaco
import streamlit as st

st.title("Streamlit Code Editor")

content = st_monaco(
    value="// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
    height="200px",
    language="javascript",
    lineNumbers=True,
    minimap=False,
    theme="vs-dark",
)

if st.button("Get content"):
    st.markdown(f"```javascript{content}")
