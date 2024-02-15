# host the Website to check locally
host:
	$(MAKE) -C frontend host


build:
	$(MAKE) -C frontend build

#pull from repo
pull:
	git pull
	git status

#push to repo
push:
	git add .
	git commit -m "Default commit message"
	git push
	git status
