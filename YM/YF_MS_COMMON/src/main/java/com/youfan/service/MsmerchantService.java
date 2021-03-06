package com.youfan.service;

import java.util.List;
import com.youfan.enity.Msmerchant;
import com.youfan.vo.msmerchant.MsmerchantVo;

public interface MsmerchantService {
	
	
	public void insertMsmerchant(Msmerchant msmerchant);
	public Msmerchant queryMsmerchantByid(int id);
	public void updateMsmerchant(Msmerchant msmerchant);
	public void deleteMsmerchantbyid(int id);
	
	public List<Msmerchant> queryMsmerchantbyvo(MsmerchantVo msmerchantVo);
	
	public Msmerchant queryMsmerchantByaccount(String account);
}
