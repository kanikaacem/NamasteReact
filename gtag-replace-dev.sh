#!/bin/bash

# Set the path to your index.html file
file_path="build/index.html"

# Set the Google tag ID from the Google script
google_tag_id="G-EJVXEP24LG"

# Check if the file exists
if [ ! -f "$file_path" ]; then
  echo "File not found: $file_path"
  exit 1
fi

# Replace the Google tag ID in the index.html file
sed -i "s/G-H8BGSJ85MW/$google_tag_id/g" "$file_path"

echo "Google tag ID replaced successfully!"
