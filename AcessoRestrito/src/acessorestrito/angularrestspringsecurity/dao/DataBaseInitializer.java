package acessorestrito.angularrestspringsecurity.dao;

import org.springframework.security.crypto.password.PasswordEncoder;

import acessorestrito.angularrestspringsecurity.dao.user.UserDao;
import acessorestrito.angularrestspringsecurity.entity.Role;
import acessorestrito.angularrestspringsecurity.entity.Usuario;

import acessorestrito.angularrestspringsecurity.dao.ano.AnoDao;

import java.util.Date;

public class DataBaseInitializer {

	private UserDao userDao;

	private PasswordEncoder passwordEncoder;
	
	

	protected DataBaseInitializer() {
		
		
	}

	public DataBaseInitializer(UserDao userDao, PasswordEncoder passwordEncoder) {
		this.userDao = userDao;
		this.passwordEncoder = passwordEncoder;
	}

	public void initDataBase() {
/*
		Usuario userUser = new Usuario("xexeu", this.passwordEncoder.encode("xexeu"));
        userUser.addRole(Role.ADMIN);
        this.userDao.save(userUser);
        */
	}
}
