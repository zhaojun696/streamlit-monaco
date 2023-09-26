FRONTEND := $(shell find . -maxdepth 2 -name frontend)
NPM := npm --prefix=$(FRONTEND)
NCU := ncu --cwd=$(FRONTEND)

.PHONY: install
install: 
	$(NPM) install
	pip install -e .

.PHONY: run
run: 
	$(NPM) run dev

.PHONY: upgrade
upgrade: upgrade-frontend upgrade-wheel

.PHONY: upgrade-frontend
upgrade-frontend: 
	npm install --global npm-check-updates
	$(NCU) --upgrade
	$(NPM) update

.PHONY: upgrade-wheel
upgrade-wheel: 
	pip install pip --upgrade
	pip install -e . --upgrade

.PHONY: build
build: build-frontend build-wheel

.PHONY: build-frontend
build-frontend: 
	$(NPM) run build

.PHONY: build-wheel
build-wheel: 
	RELEASE=true python setup.py sdist bdist_wheel

.PHONY: upload
upload:
	twine upload dist/*


