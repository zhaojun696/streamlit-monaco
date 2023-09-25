from streamlit_monaco.core.frame import new_element


class Media:

    def Player(self, url, **props):
        new_element("mediaPlayer", "Player")(url=url, **props)
