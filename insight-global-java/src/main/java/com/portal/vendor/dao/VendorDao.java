package com.portal.vendor.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class VendorDao {

	@Autowired
	NamedParameterJdbcTemplate jdbcTemplate;

	public List<Map<String, Object>> getApplications() {
		try {
			return jdbcTemplate.queryForList("select * from application", new MapSqlParameterSource());
		} catch (DataAccessException e) {
			e.printStackTrace();
			return null;
		}
	}

	public int insertApplication(Map<String, Object> map) {
		try {
			return jdbcTemplate.update(
					"insert into application(title, description, client, client_priority, target_date, product_area) values(:title, :description, :client, :client_priority, :target_date, :product_area)",
					map);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return 0;
	}

}
