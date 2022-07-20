FROM mongo

COPY pieterpad.json /pieterpad.json
CMD mongoimport --uri mongodb://mongodb:27017/testdb --collection stages --drop --file /pieterpad.json --jsonArray