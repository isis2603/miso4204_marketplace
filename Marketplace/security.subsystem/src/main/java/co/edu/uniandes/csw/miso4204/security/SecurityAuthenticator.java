/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.miso4204.security;

import static co.edu.uniandes.csw.miso4204.security.SecurityRealm.REALM;
import co.edu.uniandes.csw.miso4204.security.jwt.JwtToken;
import co.edu.uniandes.csw.miso4204.security.jwt.api.VerifyToken;
import co.edu.uniandes.csw.miso4204.security.logic.SecurityLogic;
import co.edu.uniandes.csw.miso4204.security.logic.dto.UserSessionDTO;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.Authenticator;
import org.apache.shiro.authc.SimpleAccount;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.subject.SimplePrincipalCollection;
import org.apache.shiro.util.ByteSource;

/**
 *
 * @author estudiante
 */
public class SecurityAuthenticator implements Authenticator {

    
    private SecurityLogic securityLogic;
    

    public AuthenticationInfo authenticate(AuthenticationToken at) throws AuthenticationException {
        JwtToken authToken = (JwtToken) at;
        if (!authToken.getToken().equals("")) {
            //Descifrar token y establecer info de usuario
            UserSessionDTO user = decodeUser(authToken.getToken());
            if (validarToken(user)) {
                SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo();
                authenticationInfo.setPrincipals(new SimplePrincipalCollection(user, user.getUserName()));
                return authenticationInfo;
            }
        }
        throw new AccountException("Token invalido.");
    }

    public UserSessionDTO decodeUser(String token) {
        UserSessionDTO user = null;
        try {
            VerifyToken ver = new VerifyToken();
            user = ver.getDataUser(token);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return user;
    }

    public boolean validarToken(UserSessionDTO user) {
        UserSessionDTO userRecord = securityLogic.getUserSession(user.getId());
        boolean result=false;
        if(userRecord!=null){
            result=(userRecord.getUserName().equals(user.getUserName()) && userRecord.getPassword().equals(user.getPassword()) && user.getTenantID().equals(userRecord.getTenantID()));
        }
        return result;
    }

    public SecurityLogic getSecurityLogic() {
        return securityLogic;
    }

    public void setSecurityLogic(SecurityLogic securityLogic) {
        this.securityLogic = securityLogic;
    }


}
