package com.notifyfriendsplaying; 

import androidx.work.Worker;
import android.content.Context;
import androidx.work.WorkerParameters;
import android.content.Intent;
import android.os.Build;
import javax.annotation.Nonnull;
import androidx.annotation.RequiresApi;
import android.app.NotificationChannel;
import android.app.NotificationManager;

public class BackgroundWorker extends Worker {
    private final Context context;

    public BackgroundWorker(@Nonnull Context context, @Nonnull WorkerParameters workerParams) {
        super(context, workerParams);
        this.context = context;
    }
    @Nonnull
    @Override
    public Result doWork() {

        // background work will take place here
        System.out.println("Worker do work");

        Intent serviceIntent = new Intent(this.context, BackgroundWorkerService.class);
        serviceIntent.putExtra("do", true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            createChannel();
            this.context.startForegroundService(serviceIntent);
        } else {
            this.context.startService(serviceIntent);
        }
        return Result.success();

    }
    @RequiresApi(Build.VERSION_CODES.O)
    private void createChannel() {
        String description = "test channel";
        int importance = NotificationManager.IMPORTANCE_DEFAULT;
        NotificationChannel channel = new NotificationChannel("demo", "test", importance);
        channel.setDescription(description);
        NotificationManager notificationManager = (NotificationManager) getApplicationContext()
            .getSystemService(getApplicationContext().NOTIFICATION_SERVICE);

        notificationManager.createNotificationChannel(channel);

    }
}