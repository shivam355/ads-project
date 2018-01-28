package me.ads.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import me.ads.entity.AllUser;
import me.ads.entity.UserDetail;

@Repository
public interface AllUserRepository extends JpaRepository<AllUser, Integer> {
	@Query("SELECT a.uniqueUserId FROM AllUser a WHERE a.userName = ?1 and a.password = ?2")
	public Integer authenticate(String userName, String password);

	@Query("SELECT a.userDetail FROM AllUser a WHERE a.uniqueUserId = ?1")
	public UserDetail authorization(Integer uniqueUserId);
}
