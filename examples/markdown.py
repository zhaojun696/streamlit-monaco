from streamlit_monaco import st_monaco
import streamlit as st

st.title("Streamlit Markdown Editor")

content = st_monaco(
    value="# Hello world",
    height="200px",
    language="markdown",
    lineNumbers=False,
    minimap=False,
)

if st.button("Get content"):
    st.write(content)
