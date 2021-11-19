package com.vetapp.application.status;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StatusController {
	
	@Autowired
	StatusRepository statusRepository;
	
	@GetMapping("/api/animals/{animalid}/status")
	public ResponseEntity<List<Status>> getAnimalStatus(@PathVariable String animalid) {
		return new ResponseEntity<>(statusRepository.findByAnimalidContaining(animalid), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/api/animals/{animalid}/status")
	public ResponseEntity<Status> addAnimalStatus(@PathVariable String animalid, @RequestBody Status newStatus) {
		newStatus.setAnimalid(animalid);
		Status status = statusRepository.save(newStatus);
		return new ResponseEntity<>(status, HttpStatus.ACCEPTED);
	}
}
