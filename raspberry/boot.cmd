echo "Welcome to Gavin"
wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb

su pi -c 'node /home/pi/RR1.js < /dev/null &'

wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb 
touch /home/pi/RR1.js 
su pi -c 'node /home/pi/RR1.js < /dev/null &'
