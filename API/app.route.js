const express = require('express');
const router = express.Router();

module.exports = router;

const usersController = require('./controllers/users.controller');
const albumsController = require('./controllers/albums.controller');
const artistsController = require('./controllers/artists.controller');
const songsController = require('./controllers/songs.controller');


//User Routes
router.get('/users/all',usersController.getAllUsers);
router.get('/signin/:username/:password',usersController.signIn);
router.post('/insert/user',usersController.insertUser);

//Albums Routes
router.get('/albums/all', albumsController.getAllAlbums);
router.get('/albumsBy/artist/:artistID', albumsController.getAlbumsByArtistID);
router.post('/create/album',albumsController.createAlbum);

//Artists Routes
router.get('/artists/all', artistsController.getAllArtists);
router.post('/create/artist', artistsController.createArtist);

//Song Routes
router.get('/songs/all', songsController.getAllSongs);
router.post('/create/song', songsController.createSong);