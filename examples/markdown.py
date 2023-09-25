from streamlit_monaco import st_monaco
import streamlit as st

st.title("Streamlit Markdown Editor")

content = st_monaco(value="# Hello world", height="600px", language="markdown")

if st.button("Show editor's content"):
    st.write(content)
