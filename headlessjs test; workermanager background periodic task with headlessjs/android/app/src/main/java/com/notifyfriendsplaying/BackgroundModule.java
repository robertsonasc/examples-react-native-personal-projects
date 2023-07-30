package com.notifyfriendsplaying; 

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import android.content.Context;
import androidx.work.WorkManager;
import androidx.work.PeriodicWorkRequest;
import androidx.work.ExistingPeriodicWorkPolicy;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nonnull;
import com.facebook.react.bridge.ReactMethod;

public class BackgroundModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "BackgroundWorkManager";

    private Context mContext;
    private PeriodicWorkRequest workRequest;

    BackgroundModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
        workRequest = new PeriodicWorkRequest.Builder(BackgroundWorker.class, 5, TimeUnit.SECONDS).build();
    }

    @ReactMethod
    public void startBackgroundWork() {
        WorkManager.getInstance(mContext).enqueueUniquePeriodicWork("testWork", ExistingPeriodicWorkPolicy.KEEP,workRequest);
    }

    @ReactMethod
    public void stopBackgroundWork() {
        WorkManager.getInstance(mContext).cancelUniqueWork("testWork");
    }

    @Nonnull
    @Override
    public String getName() {
        return MODULE_NAME;
    }
}