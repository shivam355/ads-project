package me.ads.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import me.ads.entity.UserType;

@Repository
public interface UserTypeRepository extends JpaRepository<UserType, String> {

}
