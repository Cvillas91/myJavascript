/*
@Date:   Wednesday Oct 7 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

HOMEWORK #1: Variables
Description:
    File created in VSCode, code in Javascript.
    This code exemplifies how to create and print different types of variables by using 
    different song attributes. (e.g. Genre, Artist, Duration...)
*/

//INPUTING THE DETAILS
var SongTitle = "November Rain";
var Artist = "Guns N' Roses";
var Album = "Use your Illusion I";
var ReleaseDate = "18 Feb, 1992";
var Duration_in_seconds = 537;
var Duration_in_minutes = 8.57;
var Genre = "Rock";
var Author = "Axl Rose";
var ReleaseFormat = "Single in CD";
var DiscoCompany = "Geffen Records";
var Producers = ["Mike Clink","Guns N' Roses"];
var VideoClip = true;


//PRINTING THE DETAILS
console.log("Song: " + SongTitle);
console.log("Artist: " + Artist);
console.log("Album: " + Album);
console.log("Release Date: " + ReleaseDate);
console.log("Duration (seconds): " + Duration_in_seconds);
console.log("Duration (minutes): " + Duration_in_minutes);
console.log("Genre: " + Genre);
console.log("Author: " + Author);
console.log("Released Format: " + ReleaseFormat);
console.log("Disco Company: " + DiscoCompany);
console.log("Producers: " + Producers[0] + ", " + Producers[1]);
console.log("Videoclip Available: " + VideoClip);
