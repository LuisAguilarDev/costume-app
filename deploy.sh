#1st deploy - only buid

# echo "Switching to branch master"
# git checkout master

# echo "Building app..."
# npm run build

# echo "deploying files to server"
# scp -r dist/* user@IP:/var/www/ipfile

# echo "Done!"

#2nd deploy - only img

echo "Switching to branch master"
git checkout master
docker save -o costume.tar costume-app
scp costume.tar user@ip:/var/www/ipfile
ssh -t user@ip << EOF

# Stop and remove the existing container if it is running
if [ \$(docker ps -q -f name=costume-app-container) ]; then
  docker stop costume-app-container
  docker rm costume-app-container
fi

# Remove the older image if it exists
if [ \$(docker images -q costume-app) ]; then
  docker rmi costume-app
fi

# Load the new image
docker load -i /var/www/ipfile/costume.tar

# Run the new container
docker run -d --name costume-app-container -p 4001:80 costume-app

EOF