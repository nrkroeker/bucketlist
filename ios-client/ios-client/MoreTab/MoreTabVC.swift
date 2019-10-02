//
//  MoreTabVC.swift
//  ios-client
//
//  Created by Daniel Peach on 9/30/19.
//  Copyright © 2019 Daniel Peach. All rights reserved.
//

import UIKit
import Firebase

class MoreTabVC: UIViewController {
    
    // TODO: remove this bad practice
    let logoutBtn: UIButton = {
        let btn = UIButton(type: UIButton.ButtonType.system)
        btn.backgroundColor = .white
        btn.setTitle("Logout", for: .normal)
        btn.addTarget(self, action: #selector(logout), for: .touchUpInside)
        btn.clipsToBounds = true
        btn.layer.cornerRadius = 4
        return btn
    }()
    
    @objc private func logout() {
        do {
            try Auth.auth().signOut()
            let sceneDelegate = view.window?.windowScene?.delegate as! SceneDelegate
            sceneDelegate.coordinator?.reloadRootVC()
        }  catch let signOutErr {
           print("Failed to sign out with error: \(signOutErr)")
        }
    }
    
    let testButton: UIButton = {
        let btn = UIButton(type: UIButton.ButtonType.system)
        btn.backgroundColor = .white
        btn.setTitle("Test", for: .normal)
        btn.addTarget(self, action: #selector(test), for: .touchUpInside)
        btn.clipsToBounds = true
        btn.layer.cornerRadius = 4
        return btn
    }()
    
    @objc private func test() {
        Server.shared.sendTestRequest { (res, err) in
            if let err = err {
                print("Error sending request: ", err)
                return
            }
            
            guard let res = res else { return }
            print(res.msg)
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.backgroundColor = .red
        
        view.addSubview(logoutBtn)
        logoutBtn.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            logoutBtn.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor),
            logoutBtn.centerYAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerYAnchor),
            logoutBtn.widthAnchor.constraint(equalToConstant: 150),
            logoutBtn.heightAnchor.constraint(equalToConstant: 40)
        ])
        
        view.addSubview(testButton)
        testButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            testButton.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor),
            testButton.centerYAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerYAnchor, constant: 200),
            testButton.widthAnchor.constraint(equalToConstant: 150),
            testButton.heightAnchor.constraint(equalToConstant: 40)
        ])
    }
}
