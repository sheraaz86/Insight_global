package com.portal.vendor.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.portal.vendor.dao.VendorDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class VendorController {

	@Autowired
	private VendorDao vendorDao;

	@PostMapping(value = "/application", produces = "application/json")
	public ResponseEntity<String> insertJob(@RequestBody Map<String, Object> map) {
		int result = 0;
		try {
			result = vendorDao.insertApplication(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (result > 0) {
			return new ResponseEntity<String>("application added successfully", HttpStatus.OK);
		} else {

			return new ResponseEntity<String>("Failed to insert job", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping(value = "/application", produces = "application/json")
	public ResponseEntity<List<Map<String, Object>>> getApplications() {
		List<Map<String, Object>> result = new ArrayList<>();
		try {
			result = vendorDao.getApplications();
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (result != null && !result.isEmpty()) {
			return new ResponseEntity<List<Map<String, Object>>>(result, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Map<String, Object>>>(result, HttpStatus.NOT_FOUND);
		}
	}

}
