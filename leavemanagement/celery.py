from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'leavemanagement.settings')

app = Celery('leavemanagement')
app.conf.enable_utc = False

app.conf.update(timezone = 'Asia/Kolkata')

app.config_from_object(settings, namespace='CELERY')


# Celery Beat Settings
app.conf.beat_schedule = {
    'run-my-task-morning': {
        'task': 'Facerecognition.tasks.my_task',
        'schedule': crontab(
            hour=8,
            minute=40
        ),
    }
}

app.autodiscover_tasks()

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')