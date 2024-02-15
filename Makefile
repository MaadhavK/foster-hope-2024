#start web application
run:
	cd ./front-end && npm run dev


#add all then show status
add:
	git add -A
	git status

#pull from repo
pull:
	git pull
	git status

#push to repo
push:
	git add .
	git commit -m "Made MakeFile File"
	git push
	git status
