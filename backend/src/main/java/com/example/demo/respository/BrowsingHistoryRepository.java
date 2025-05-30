package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.BrowsingHistory;


@Repository
public interface BrowsingHistoryRepository extends JpaRepository<BrowsingHistory, Long> {

}