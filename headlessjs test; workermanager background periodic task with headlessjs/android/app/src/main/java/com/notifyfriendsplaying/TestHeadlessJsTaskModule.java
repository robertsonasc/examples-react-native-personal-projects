package com.notifyfriendsplaying; 

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.content.Context;
import android.content.Intent;

import com.facebook.react.HeadlessJsTaskService;

public class TestHeadlessJsTaskModule extends ReactContextBaseJavaModule {
    Context context;

    TestHeadlessJsTaskModule(ReactApplicationContext context) {
       super(context);
       this.context = context;
   }

   @Override
    public String getName() {
        return "TestHeadlessJsTaskModule";
    }

    @ReactMethod
    public void initService() {
        System.out.println("Iniciando serviço HeadlessJsTask");
        Intent serviceIntent = new Intent(this.context, TestHeadlessTaskService.class);

        serviceIntent.putExtra("do", true);
        this.context.startService(serviceIntent);
        HeadlessJsTaskService.acquireWakeLockNow(this.context);
    }
}